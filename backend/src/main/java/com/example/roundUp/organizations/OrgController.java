package com.example.roundUp.organizations;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.roundUp.errorResponse.ErrorResponse;

@RestController
@RequestMapping(value = "/api/organizations", produces = "application/json")
public class OrgController {

    private final OrgService orgService;

    @Autowired
    public OrgController(OrgService orgService) {
        this.orgService = orgService;
    }

    @GetMapping
    public List<OrgEntity> getAllOrgs() {
        return orgService.getAllOrgs();
    }

     @GetMapping("/{id}")
    public ResponseEntity<?> findById(@PathVariable Integer id) {
        Optional<OrgEntity> orgEntity = orgService.findById(id);
        if (orgEntity.isPresent()) {
            return ResponseEntity.ok(orgEntity.get());
        } else {
            return ErrorResponse.errorMessage("Organization don't exist", HttpStatus.NOT_FOUND);
        }
    }
}
