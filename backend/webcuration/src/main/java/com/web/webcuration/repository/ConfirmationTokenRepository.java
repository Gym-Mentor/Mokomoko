package com.web.webcuration.repository;

import java.time.LocalDateTime;
import java.util.Optional;

import com.web.webcuration.Entity.ConfirmationToken;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ConfirmationTokenRepository extends JpaRepository<ConfirmationToken, String> {

    Optional<ConfirmationToken> findByIdAndExpirationDateAfterAndExpired(String confirmationTokenId, LocalDateTime now,
            boolean expired);
}
