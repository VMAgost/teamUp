package com.codecool.teamup.controller;

import com.codecool.teamup.model.weapon.Weapon;
import com.codecool.teamup.model.weapon.WeaponDTO;
import com.codecool.teamup.service.WeaponService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/weapons")
public class WeaponController {

    private final WeaponService weaponService;
    private final HttpServletResponse httpServletResponse;

    @Autowired
    public WeaponController(WeaponService weaponService, HttpServletResponse httpServletResponse) {
        this.weaponService = weaponService;
        this.httpServletResponse = httpServletResponse;
    }

    @GetMapping()
    public List<Weapon> getWeapons() {
        return weaponService.getAllWeapons();
    }

    @GetMapping("/{id}")
    public Weapon getWeaponById(@PathVariable int id) {
        if (weaponService.getWeaponById(id).isPresent()) {
            return weaponService.getWeaponById(id).get();
        }
        throw new RuntimeException("Weapon not found");
    }

    @PostMapping("/add")
    public void addWeapon(@RequestBody WeaponDTO weapon) {
        weaponService.addWeapon(weapon);
    }

    @GetMapping("/name/{name}")
    public Weapon getWeaponByName(@PathVariable String name) {
        Optional<Weapon> optionalWeapon = weaponService.getWeaponByName(name);
        if (optionalWeapon.isPresent()) {
            return optionalWeapon.get();
        }
        throw new RuntimeException("Weapon with name " + name + " not found");
    }

    @DeleteMapping("/delete")
    public void deleteWeaponById(@RequestParam long id) {
        weaponService.deleteWeaponById(id);
    }
}
