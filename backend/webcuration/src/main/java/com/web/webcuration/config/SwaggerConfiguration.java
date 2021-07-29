package com.web.webcuration.config;

import static springfox.documentation.builders.PathSelectors.regex;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.RequestMethod;

import com.google.common.base.Predicate;

import springfox.documentation.builders.*;
import springfox.documentation.schema.ModelRef;
import springfox.documentation.service.*;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfiguration {

    private String version = "1";

    @Bean
    public Docket api() {
        List<ResponseMessage> responseMessages = new ArrayList<ResponseMessage>();
        responseMessages.add(new ResponseMessageBuilder().code(200).message("OK !!!").build());
        responseMessages.add(new ResponseMessageBuilder().code(500).message("서버 문제 발생 !!!")
                .responseModel(new ModelRef("Error")).build());
        responseMessages.add(new ResponseMessageBuilder().code(404).message("페이지를 찾을 수 없습니다 !!!").build());

        return new Docket(DocumentationType.SWAGGER_2).consumes(getConsumeContentTypes())
                .produces(getProduceContentTypes()).groupName(version).select()
                .apis(RequestHandlerSelectors.basePackage("com.web.webcuration.controller")).paths(postPaths()).build()
                .useDefaultResponseMessages(false).globalResponseMessage(RequestMethod.GET, responseMessages);
    }

    private Set<String> getConsumeContentTypes() {
        Set<String> consumes = new HashSet<>();
        consumes.add("application/json;charset=UTF-8");
        return consumes;
    }

    private Set<String> getProduceContentTypes() {
        Set<String> produces = new HashSet<>();
        produces.add("application/json;charset=UTF-8");
        return produces;
    }

    private Predicate<String> postPaths() {
        // return PathSelectors.any(); //모든 경로에 대해서 다함
        // return or(regex("/admin/.*"), regex("/user/.*"));
        return regex("/.*"); // 특정한 경로
    }
}
