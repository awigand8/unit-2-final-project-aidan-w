package com.example.unit_2_final_project.Models;

import jakarta.persistence.*;

@Entity
public class BucketItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private boolean completed;

    @ManyToOne
    private Place place;

    public BucketItem() {}

    public BucketItem(Place place) {
        this.place = place;
        this.completed = false;
    }

    public int getId() {
        return id;
    }

    public boolean isCompleted() {
        return completed;
    }

    public Place getPlace() {
        return place;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }

    public void setPlace(Place place) {
        this.place = place;
    }
}
