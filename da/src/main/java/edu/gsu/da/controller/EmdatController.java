package edu.gsu.da.controller;

import edu.gsu.da.service.EmDatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/emdat")
@CrossOrigin(origins = "http://localhost:3000")
public class EmdatController {

    @Autowired
    EmDatService emDatService;

    @GetMapping
    public ResponseEntity<Map<String, String>> openEmdatWithYearRange(
            @RequestParam(name = "fromYear", required = true) int fromYear,
            @RequestParam(name = "toYear", required = true) int toYear) {

        Map<String, String> result = emDatService.downloadData(fromYear, toYear);

        if ("success".equals(result.get("status"))) {
            return ResponseEntity.ok(result);
        } else {
            return ResponseEntity.status(500).body(result);
        }
    }
}
