package com.landingPage.add.to.cart.page.Controller;

import com.landingPage.add.to.cart.page.model.ContactMessage;
import com.landingPage.add.to.cart.page.repository.ContactMessageRepository;
import com.landingPage.add.to.cart.page.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

    @Autowired
    private ContactMessageRepository contactMessageRepository;

    @Autowired
    private EmailService emailService;

    @PostMapping("/submit")
    public ResponseEntity<?> submitContactForm(@RequestBody ContactMessage contactMessage) {
        try {
            // Save the contact message in the database
            contactMessageRepository.save(contactMessage);

            // Send confirmation email to the user who filled out the form
            emailService.sendConfirmationEmail(contactMessage.getEmail(), contactMessage.getName());

            // Send the details to the admin
            emailService.sendContactMessageToAdmin(
                contactMessage.getName(),
                contactMessage.getEmail(),
                contactMessage.getPhone(),
                contactMessage.getSubject(),
                contactMessage.getMessage()
            );

            return ResponseEntity.ok("Message received and emails sent!");
        } catch (Exception e) {
            e.printStackTrace(); // This prints out the exact reason the email failed to standard output
            return ResponseEntity.status(500).body("Error submitting the form or sending the email: " + e.getMessage());
        }
    }
}
