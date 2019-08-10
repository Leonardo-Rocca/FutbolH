package com.example.controllers;


import com.example.domain.Player;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;

@Controller
@SpringBootApplication
public class PrivacyController {

    @RequestMapping("/politic")
    String index() {
        return "politica.html";
    }
}
