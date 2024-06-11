package com.codecool.teamup.controller;

import com.codecool.teamup.model.guild.Guild;
import com.codecool.teamup.model.guild.GuildDTO;
import com.codecool.teamup.service.GuildService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/guild")
public class GuildController {

    private final GuildService guildService;

    @Autowired
    public GuildController(GuildService guildService) {
        this.guildService = guildService;
    }


    @PostMapping("/create")
    public void createGuild(@RequestParam long userId, @RequestBody GuildDTO guildDTO) {
        guildService.registerGuild(userId, guildDTO);
    }

    @GetMapping("/all")
    public List<Guild> getAllGuilds() {
        return guildService.getAllGuilds();
    }

    @GetMapping("/{id}")
    public Optional<Guild> getGuildById(@PathVariable Long id) {
        return guildService.getGuildById(id);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteGuildById(@PathVariable Long id) {

        guildService.deleteGuildById(id);
    }
}
