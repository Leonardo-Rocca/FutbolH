package com.example.controllers;

import com.example.domain.Player;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@SpringBootApplication
public class PlayersController {

    @RequestMapping("/players")
    @ResponseBody
    String index() {
        return new Player("leo").getName();
    }
}
