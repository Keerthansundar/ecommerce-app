package com.ecommerce.project.security.response;

import java.util.List;

public class UserInfoResponse {

    private Long id;
    private String username;
    private List<String> roles;
    private String token;

    public UserInfoResponse(Long id, String username, List<String> roles, String token) {
        this.id = id;
        this.username = username;
        this.roles = roles;
        this.token = token;
    }

    public UserInfoResponse(Long id, String username, List<String> roles) {
        this.id = id;
        this.username = username;
        this.roles = roles;
    }

    public Long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public List<String> getRoles() {
        return roles;
    }

    public String getToken() {
        return token;
    }
}
