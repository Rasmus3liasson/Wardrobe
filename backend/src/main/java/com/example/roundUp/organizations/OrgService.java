package com.example.roundUp.organizations;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrgService {

    private final OrgRepo orgRepo;

    @Autowired
    public OrgService(OrgRepo orgRepo) {
        this.orgRepo = orgRepo;
    }

    public List<OrgEntity> getAllOrgs() {
        return orgRepo.findAll();
    }

    public OrgEntity addOrg(OrgEntity orgEntity) {
        return orgRepo.save(orgEntity);
    }

    public OrgEntity updateOrg(OrgEntity orgEntity) {
        return orgRepo.save(orgEntity);
    }

    public void deleteOrg(Integer id) {
        orgRepo.deleteById(id);
    }

    public Optional<OrgEntity> findById(Integer id) {
        return orgRepo.findById(id);
    }
}
