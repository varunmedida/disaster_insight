package edu.gsu.da.service;

import java.util.Map;
import java.util.concurrent.Future;

public interface ScriptService {
    Future<Map<String, Object>> runPythonScriptAsync();
}
