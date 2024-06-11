package com.codecool.teamup.controller;

import com.codecool.teamup.model.dispatch.Dispatch;
import com.codecool.teamup.model.dispatch.DispatchDTO;
import com.codecool.teamup.service.DispatchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class DispatchController {
    private final DispatchService dispatchService;

    @Autowired
    public DispatchController(DispatchService dispatchService) {
        this.dispatchService = dispatchService;
    }

    @GetMapping("/dispatches")
    public List<Dispatch> getDispatches() {
        if (dispatchService.getDispatch().isPresent()) {
            List<DispatchDTO> response = dispatchService.getDispatch().get();
            List<Dispatch> dispatches = new ArrayList<>();
            response.forEach(res -> dispatches.add(new Dispatch(res.published(), res.message())));
            return dispatches;
        }
        throw new RuntimeException("Sorry. No dispatches were found.");
    }
}
