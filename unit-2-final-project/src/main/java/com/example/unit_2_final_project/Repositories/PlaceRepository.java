package com.example.unit_2_final_project.Repositories;

import com.example.unit_2_final_project.Models.Place;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlaceRepository extends JpaRepository<Place, Integer> {
}
