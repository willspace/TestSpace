package com.test.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class HelloWorldController {


    @RequestMapping(value =  "/index.do" , method = RequestMethod.GET)
       public String indexPage(Model model) {
        //model.addAttribute("name", "zhangsan");
        return "web_index";
    }
}
