package com.example.controllers;

import com.example.domain.Player;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;

@Controller
@SpringBootApplication
@CrossOrigin(origins = "*", methods= {RequestMethod.GET, RequestMethod.POST})
public class PlayersController {

    @RequestMapping("/players")
    @ResponseBody
    List<Player> index() {
        List<Player> playersMock = new ArrayList();
        playersMock.add(new Player("leo",10d));
        playersMock.add(new Player("facu",9d));
        playersMock.add(new Player("nico",7d));
        playersMock.add(new Player("juancito",7d));
        playersMock.add(new Player("Cris",3d));
        playersMock.add(new Player("Fede",4d));
        playersMock.add(new Player("Edu",7d));
        return playersMock;
    }
}
