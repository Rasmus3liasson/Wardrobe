package com.example.roundUp.account;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class AccountService {

    private final AccountRepo accountRepo;

    public AccountService(AccountRepo accountRepo) {
        this.accountRepo = accountRepo;
    }

    public List<AccountEntity> getAllAccounts() {

        if (accountRepo.findAll().isEmpty()) {
            throw new RuntimeException("No accounts found");
        }
        return accountRepo.findAll();
        /* return accountRepo.findAll(); */
    }

    public AccountEntity createAccount(AccountEntity account) {
        return accountRepo.save(account);
    }

    public AccountEntity getAccountById(Long id) {
        return accountRepo.findById(id).orElseThrow(() -> new RuntimeException("Account not found"));
    }

    public AccountEntity updateAccount(Long id, AccountEntity account) {
        AccountEntity existingAccount = getAccountById(id);
        existingAccount.setName(account.getName());
        existingAccount.setNickname(account.getNickname());
        existingAccount.setEmail(account.getEmail());
        return accountRepo.save(existingAccount);
    }

    public void deleteAccount(Long id) {
        accountRepo.deleteById(id);
    }

}
