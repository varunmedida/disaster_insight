package edu.gsu.da.controller;

import edu.gsu.da.service.ScriptService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Future;

@RestController
@RequestMapping("/api/process-file")
@CrossOrigin(origins = "http://localhost:3000")
public class ScriptController {

    @Autowired
    ScriptService scriptService;

    @GetMapping
    public ResponseEntity<Map<String, Object>> processFile() throws ExecutionException, InterruptedException {
        Future<Map<String, Object>> futureResult = scriptService.runPythonScriptAsync();
        Map<String, Object> result = futureResult.get();  // Block until task completes
        return ResponseEntity.ok(result);
    }
}
