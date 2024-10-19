package edu.gsu.da.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

@Service
public class ScriptServiceImpl implements ScriptService{

    @Value("${python.script.path}")
    private String pythonScriptPath;

    @Value("${downloaded.file.path}")
    private String downloadedFilePath;

    @Value("${python.requirements.path}")
    private String requirementsFilePath;

    @Value("${python.venv.path}")
    private String venvPath;

    // Executor service for running the process asynchronously
    private final ExecutorService executorService = Executors.newSingleThreadExecutor();

    // Run the Python script, potentially in the background
    public Future<Map<String, Object>> runPythonScriptAsync() {
        return executorService.submit(this::runPythonScript); // Submit the task to run asynchronously
    }

    // Main method to execute the Python script
    public Map<String, Object> runPythonScript() {
        Map<String, Object> response = new HashMap<>();
        try {
            // Step 1: Check if venv exists, create if necessary, and install dependencies
            setupVirtualEnvironment();

            // Step 2: Define the command to run the Python script using the virtual environment and pass the file path
            String pythonExecutable = venvPath + "/bin/python3";
            ProcessBuilder processBuilder = new ProcessBuilder(pythonExecutable, pythonScriptPath, downloadedFilePath);

            // Start the process to run the Python script
            Process process = processBuilder.start();

            // Capture the output of the script
            StringBuilder output = new StringBuilder();
            StringBuilder errorOutput = new StringBuilder();
            BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
            BufferedReader errorReader = new BufferedReader(new InputStreamReader(process.getErrorStream()));

            String line;
            while ((line = reader.readLine()) != null) {
                output.append(line).append("\n");
            }

            // Capture error output if any
            while ((line = errorReader.readLine()) != null) {
                errorOutput.append(line).append("\n");
            }

            // Wait for the process to complete and check the exit value
            int exitCode = process.waitFor();
            if (exitCode == 0) {
                response.put("status", "success");
                response.put("result", output.toString().trim());
            } else {
                response.put("status", "error");
                response.put("message", "Python script exited with code " + exitCode);
                response.put("error", errorOutput.toString().trim());  // Capture error output if script fails
            }
        } catch (Exception e) {
            e.printStackTrace();
            response.put("status", "error");
            response.put("message", "Error running Python script: " + e.getMessage());
        }
        return response;
    }

    // Method to check for venv, create if necessary, activate it, and install dependencies
    private void setupVirtualEnvironment() throws Exception {
        Path venvDirectory = Paths.get(venvPath);

        // Check if the venv exists by looking for the bin/activate file
        if (!Files.exists(venvDirectory.resolve("bin/activate"))) {
            // Venv does not exist, so create it
            System.out.println("Creating virtual environment...");
            ProcessBuilder createVenvProcessBuilder = new ProcessBuilder("python3", "-m", "venv", venvPath);
            Process createVenvProcess = createVenvProcessBuilder.start();
            int createExitCode = createVenvProcess.waitFor();

            if (createExitCode != 0) {
                throw new Exception("Error creating virtual environment. Exit code: " + createExitCode);
            }
        }

        // Venv exists (or has just been created), activate it and install dependencies
        System.out.println("Activating virtual environment and installing dependencies...");

        String pipExecutable = venvPath + "/bin/pip3";
        ProcessBuilder pipInstallProcessBuilder = new ProcessBuilder(pipExecutable, "install", "-r", requirementsFilePath);
        Process pipInstallProcess = pipInstallProcessBuilder.start();

        // Capture and print output of the pip install command (optional)
        BufferedReader pipReader = new BufferedReader(new InputStreamReader(pipInstallProcess.getInputStream()));
        String line;
        while ((line = pipReader.readLine()) != null) {
            System.out.println(line);
        }

        // Capture error output (optional)
        BufferedReader pipErrorReader = new BufferedReader(new InputStreamReader(pipInstallProcess.getErrorStream()));
        StringBuilder pipErrorOutput = new StringBuilder();
        while ((line = pipErrorReader.readLine()) != null) {
            pipErrorOutput.append(line).append("\n");
        }

        // Wait for pip install process to complete and check the exit value
        int pipExitCode = pipInstallProcess.waitFor();
        if (pipExitCode != 0) {
            throw new Exception("Error installing Python dependencies. Exit code: " + pipExitCode + "\n" + pipErrorOutput);
        }
    }
}
