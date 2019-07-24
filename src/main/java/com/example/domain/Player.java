package com.example.domain;

public class Player {
    private String name;
    private Double ability;

    public Player(String name, Double ability) {
        this.name = name;
        this.ability = ability;
    }

    public String getName() {
        return name;
    }

    public Double getAbility() {
        return ability;
    }

}
