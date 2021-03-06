package com.chambea;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication//(exclude = {DataSourceAutoConfiguration.class })
public class ChambeaBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(ChambeaBackendApplication.class, args);
    }

}
