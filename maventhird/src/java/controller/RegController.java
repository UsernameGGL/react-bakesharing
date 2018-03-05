package controller;

import domain.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class RegController {

    @RequestMapping(value = "/registe.do",method = RequestMethod.POST)
    public String registe(User user){
        System.out.println("哈哈哈哈"+user.getName());
        if(user.getPassword()==null||user.getPhone()==null||user.getGender()==null||user.getName()==null||user.getPhone().length()!=11||user.getPassword().length()!=6){
            return "failpage";
        }
        return "succpage";
    }

}
