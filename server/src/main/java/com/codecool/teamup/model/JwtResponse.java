package com.codecool.teamup.model;

import java.util.List;

public record JwtResponse(String jwt, String name, List<String> roles) {}
