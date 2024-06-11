package com.codecool.teamup.controller;

import com.codecool.teamup.model.JwtResponse;
import com.codecool.teamup.model.request.LoginRequest;
import com.codecool.teamup.model.user.UserDTO;
import com.codecool.teamup.model.user.UserEntity;
import com.codecool.teamup.model.user.NewUserDTO;
import com.codecool.teamup.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/user")
public class UserController {
    private final UserService userService;


    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public String registerUser(@RequestBody NewUserDTO user) {
        return userService.registerUser(user);
    }

    @PostMapping("/login")
    public JwtResponse loginUser(@RequestBody LoginRequest loginRequest) {
        return userService.loginUser(loginRequest);
    }

    @DeleteMapping("/users/delete/{id}")
    public String deleteUser(@PathVariable Long id) {
        return userService.deleteUser(id);
    }

    @PatchMapping("/users/update/{id}")
    public String updateUser(@PathVariable Long id, @RequestBody UserEntity updatedUser) {
        return userService.updateUser(id, updatedUser);
    }

    @GetMapping("/users/{id}")
    public UserDTO getUserById(@PathVariable Long id) {
        return userService.getUserById(id);
    }

    @GetMapping("/users")
    public List<UserEntity> getAllUsers() {
        return userService.getAllUsers();
    }

    @PatchMapping("/add-weapon")
    public void addWeaponByName(@RequestParam String weaponName) {
        userService.addWeaponByName(weaponName);
    }

}
