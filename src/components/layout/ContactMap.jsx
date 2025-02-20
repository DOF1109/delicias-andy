import { Box } from "@mui/material";

const ContactMap = () => {
  return (
    <Box component="section" height="400px" width="100%">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d8616.069206006474!2d-63.72860649225353!3d-22.238671854567006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDE0JzE1LjUiUyA2M8KwNDMnNDAuNSJX!5e0!3m2!1sen!2sar!4v1739927711452!5m2!1sen!2sar"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Box>
  );
};

export default ContactMap;
