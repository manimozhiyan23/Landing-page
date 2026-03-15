package com.landingPage.add.to.cart.page.Controller;

import com.landingPage.add.to.cart.page.model.CartItem;
import com.landingPage.add.to.cart.page.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import jakarta.transaction.Transactional;

@RestController
@RequestMapping("/api/cart")
public class CartController {

    @Autowired
    private CartRepository cartRepository;

    @PostMapping("/add")
    public CartItem addToCart(@RequestBody CartItem item) {
        System.out.println("Received: " + item);
        return cartRepository.save(item);
    }


    @GetMapping
    public List<CartItem> getCartItems() {
        return cartRepository.findAll();
    }

    @Transactional
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteCartItem(@PathVariable("id") Long id) {
        System.out.println("DELETE request received for id: " + id);
        try {
            if (!cartRepository.existsById(id)) {
                System.out.println("Item not found with id: " + id);
                return ResponseEntity.notFound().build(); // 404
            }
            cartRepository.deleteById(id);
            System.out.println("Item deleted successfully: " + id);
            return ResponseEntity.ok("Deleted successfully"); // 200 with body so frontend can parse
        } catch (Exception e) {
            System.err.println("Error deleting item " + id + ": " + e.getMessage());
            e.printStackTrace();
            return ResponseEntity.internalServerError().body("Error deleting item: " + e.getMessage());
        }
    }



}
