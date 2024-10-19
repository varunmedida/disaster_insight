package edu.gsu.da.service;

import edu.gsu.da.entity.Disaster;

import java.util.List;

public interface DisasterService {
    List<Disaster> getAllDisasters();

    List<Disaster> getTopDisasters();

    List<Disaster> getDisastersByType(String disasterType);

    List<Disaster> getDisastersForHeatmap();
}
