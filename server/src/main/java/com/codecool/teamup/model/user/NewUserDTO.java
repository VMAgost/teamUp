package com.codecool.teamup.model.user;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public record NewUserDTO(String username, String password, String email, String birthDate, int level, String title, String image) {
}
