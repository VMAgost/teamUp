package com.codecool.teamup.model.dispatch;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.time.LocalDate;

@JsonIgnoreProperties(ignoreUnknown = true)
public record DispatchDTO(LocalDate published, String message) {
}
