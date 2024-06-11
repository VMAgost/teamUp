package com.codecool.teamup.service;

import com.codecool.teamup.model.dispatch.DispatchDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.List;
import java.util.Optional;

@Service
public class DispatchService {
    private static final int PREFERRED_LIMIT = 10;
    private final WebClient webClient;

    @Autowired
    public DispatchService(WebClient webClient) {
        this.webClient = webClient;
    }

    public Optional<List<DispatchDTO>> getDispatch() {
        String url = "https://api.helldivers2.dev/api/v1/dispatches";
        Mono<List<DispatchDTO>> responseMono = webClient.get()
                .uri(url)
                .retrieve()
                .bodyToFlux(DispatchDTO.class)
                .take(PREFERRED_LIMIT)
                .collectList();

        List<DispatchDTO> responseList = responseMono.block();

        System.out.println(responseList);
        return Optional.ofNullable(responseList);
    }

}
