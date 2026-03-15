package com.landingPage.add.to.cart.page.repository;

import com.landingPage.add.to.cart.page.model.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository extends JpaRepository<CartItem, Long> {
}

