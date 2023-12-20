package com.byte_transfer.demo.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@RestController
@RequestMapping(value ="/", method=RequestMethod.GET)
public class MainController {
    @GetMapping("")
    public String index() {
        return "Hello World";
    }
}
