package com.example.unit_2_final_project.Controllers;

import com.example.unit_2_final_project.Models.BucketItem;
import com.example.unit_2_final_project.Models.Place;
import com.example.unit_2_final_project.Repositories.BucketItemRepository;
import com.example.unit_2_final_project.Repositories.PlaceRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bucket-items")
public class BucketItemController {
    private final BucketItemRepository bucketItemRepository;
    private final PlaceRepository placeRepository;

    public BucketItemController(BucketItemRepository bucketItemRepository, PlaceRepository placeRepository) {
        this.bucketItemRepository = bucketItemRepository;
        this.placeRepository = placeRepository;
    }

    @PostMapping
    public BucketItem addItem(@RequestParam int placeId) {
        Place place = placeRepository.findById(placeId).orElseThrow(() -> new RuntimeException("Place not found"));
        BucketItem item = new BucketItem(place);
        return bucketItemRepository.save(item);
    }

    @DeleteMapping("/{id}")
    public void deleteItem(@PathVariable int id) {
        bucketItemRepository.deleteById(id);
    }

    @PutMapping("/{id}/complete")
    public BucketItem markComplete(@PathVariable int id) {
        BucketItem item = bucketItemRepository.findById(id).orElseThrow(() -> new RuntimeException("Bucket item not found"));
        item.setCompleted(true);
        return bucketItemRepository.save(item);
    }
}
