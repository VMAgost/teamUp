package com.codecool.teamup.repository;

import com.codecool.teamup.model.weapon.Weapon;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface WeaponRepository extends JpaRepository<Weapon, Long> {
    Optional<Weapon> findByName(String name);
}
