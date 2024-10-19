package edu.gsu.da.service;

import java.util.Map;

public interface EmDatService {
    Map<String, String> downloadData(int fromYear, int toYear);
}
