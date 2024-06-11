package com.codecool.teamup.model.dispatch;

import java.time.LocalDate;

public record Dispatch(LocalDate published, String message) {
}
