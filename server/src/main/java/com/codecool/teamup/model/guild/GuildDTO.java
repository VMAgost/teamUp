package com.codecool.teamup.model.guild;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public record GuildDTO(String guildName, String missionStatement, String guildBadge){};
