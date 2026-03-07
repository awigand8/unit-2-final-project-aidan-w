package com.example.unit_2_final_project.Controllers;

import com.example.unit_2_final_project.Models.Place;
import com.example.unit_2_final_project.Repositories.PlaceRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/places")
public class PlaceController {

    private final PlaceRepository placeRepository;

    public PlaceController(PlaceRepository placeRepository) {
        this.placeRepository = placeRepository;
    }

    @GetMapping
    public List<Place> getAllPlaces() {
        return placeRepository.findAll();
    }
}
