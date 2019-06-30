package com.example.controllers;

import com.example.domain.Player;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@SpringBootApplication
public class PlayersController {
/*
    @RequestMapping("/players")
    @ResponseBody
    List<Player> index() {
        List<Player> playersMock = new ArrayList();
        playersMock.add(new Player("leo",10));
        playersMock.add(new Player("facu",9));
        playersMock.add(new Player("nico",7));

        return playersMock;
    }*/
}
