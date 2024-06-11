package com.codecool.teamup.model.weapon;

import com.codecool.teamup.model.user.UserEntity;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Weapon {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String image;

//  mappedBy attribute indicates the field in the User Entity, that owns the relationship
    @ManyToMany(mappedBy = "weapons")
    private List<UserEntity> users = new ArrayList<>();

    public Weapon() {
    }

    public Weapon(String name, String image) {
        this.name = name;
        this.image = image;
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}
