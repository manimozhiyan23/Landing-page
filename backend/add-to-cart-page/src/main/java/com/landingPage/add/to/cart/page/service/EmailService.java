package com.landingPage.add.to.cart.page.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    @Value("${admin.email}")
    private String adminEmail;

    public void sendConfirmationEmail(String toEmail, String name) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(toEmail);
        message.setSubject("Thank you for contacting us!");
        message.setText("Dear " + name + ",\n\n" +
                "Thank you for reaching out to us. We have received your message and will get back to you shortly.\n\n" +
                "Best Regards,\n" +
                "The Landing Page Team");

        mailSender.send(message);
    }

    public void sendContactMessageToAdmin(String userName, String userEmail, String phone, String subject, String messageContent) {
        SimpleMailMessage adminMsg = new SimpleMailMessage();
        adminMsg.setTo(adminEmail);
        adminMsg.setSubject("New Contact Submission: " + subject);
        adminMsg.setText("You have received a new message from the contact form.\n\n" +
                "Name: " + userName + "\n" +
                "Email: " + userEmail + "\n" +
                "Phone: " + phone + "\n\n" +
                "Message:\n" + messageContent);

        mailSender.send(adminMsg);
    }
}
