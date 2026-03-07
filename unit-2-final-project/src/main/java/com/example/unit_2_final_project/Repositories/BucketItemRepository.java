package com.example.unit_2_final_project.Repositories;

import com.example.unit_2_final_project.Models.BucketItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BucketItemRepository extends JpaRepository<BucketItem, Integer> {
}
