package com.codecool.teamup.model.user;

import java.time.LocalDate;

public record UserDTO(long id, String username, String email, LocalDate birthDate, int level, String title, String image, String role) {
}
