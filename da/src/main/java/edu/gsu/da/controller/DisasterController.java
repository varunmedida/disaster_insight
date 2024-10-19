package edu.gsu.da.controller;

import edu.gsu.da.entity.Disaster;
import edu.gsu.da.service.DisasterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/disasters")
@CrossOrigin(origins = "http://localhost:3000")
public class DisasterController {

    @Autowired
    private DisasterService disasterService;

    @GetMapping
    public List<Disaster> getAllDisasters() {
        return disasterService.getTopDisasters();
    }

    @GetMapping("/type/{disasterType}")
    public List<Disaster> getDisastersByType(@PathVariable String disasterType) {
        return disasterService.getDisastersByType(disasterType);
    }

    @GetMapping("/heatmap")
    public List<Disaster> getDisastersForHeatmap() {
        return disasterService.getDisastersForHeatmap();
    }
}
