package edu.gsu.da.service;

import edu.gsu.da.entity.Disaster;
import edu.gsu.da.repository.DisasterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DisasterServiceImpl implements DisasterService{

    @Autowired
    private DisasterRepository disasterRepository;

    public List<Disaster> getAllDisasters() {
        return disasterRepository.findAll();
    }

    public List<Disaster> getTopDisasters() {
        return disasterRepository.findDisasters();
    }

    public List<Disaster> getDisastersByType(String disasterType) {
        return disasterRepository.findByDisasterTypeAndLatLongNotNull(disasterType);
    }

    @Override
    public List<Disaster> getDisastersForHeatmap() {
        return disasterRepository.findDisastersWithCountryCode();
    }
}
