import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import React, { useState } from "react";

const Register = () => {
    const router=useRouter();
  const [formData, setFormData] = useState({
    farmerName: "",
    contactNumber: "",
    email: "",
    preferredLanguage: "",
    address: "",
  });

  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  const languages = ["English", "Hindi", "Kannada"];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleLanguageSelect = (language: string) => {
    setFormData((prev) => ({
      ...prev,
      preferredLanguage: language,
    }));
    setShowLanguageDropdown(false);
  };

  const handleRegister = () => {
    //  backend connect karna hoga
    alert("User registered successfully")
    console.log("Registration data:", formData);
    router.navigate('/confirmationPage')
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Farmer's Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter farmer's name"
            value={formData.farmerName}
            onChangeText={(text) => handleInputChange("farmerName", text)}
            placeholderTextColor="#9ca3af"
          />
        </View>

        {/* Contact Number */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Contact Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter contact number"
            value={formData.contactNumber}
            onChangeText={(text) => handleInputChange("contactNumber", text)}
            keyboardType="phone-pad"
            placeholderTextColor="#9ca3af"
          />
        </View>

        {/* Email (Optional) */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email (Optional)</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter email address"
            value={formData.email}
            onChangeText={(text) => handleInputChange("email", text)}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#9ca3af"
          />
        </View>

        {/* Preferred Language */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Preferred Language</Text>
          <TouchableOpacity
            style={styles.dropdown}
            onPress={() => setShowLanguageDropdown(!showLanguageDropdown)}
          >
            <Text
              style={[
                styles.dropdownText,
                !formData.preferredLanguage && styles.placeholder,
              ]}
            >
              {formData.preferredLanguage || "Select language"}
            </Text>
            <Text style={styles.dropdownArrow}>▼</Text>
          </TouchableOpacity>

          {showLanguageDropdown && (
            <View style={styles.dropdownList}>
              {languages.map((language, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.dropdownItem}
                  onPress={() => handleLanguageSelect(language)}
                >
                  <Text style={styles.dropdownItemText}>{language}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        {/* Address */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Address</Text>
          <TextInput
            style={[styles.input, styles.addressInput]}
            placeholder="Enter complete address"
            value={formData.address}
            onChangeText={(text) => handleInputChange("address", text)}
            multiline
            numberOfLines={4}
            textAlignVertical="top"
            placeholderTextColor="#9ca3af"
          />
        </View>

        {/* Register Button */}
        <TouchableOpacity
          style={styles.registerButton}
          onPress={handleRegister}
          activeOpacity={0.8}
        >
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  formContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  inputGroup: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    backgroundColor: "#f9fafb",
    color: "#374151",
  },
  addressInput: {
    height: 100,
    paddingTop: 16,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 8,
    padding: 16,
    backgroundColor: "#f9fafb",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dropdownText: {
    fontSize: 16,
    color: "#374151",
  },
  placeholder: {
    color: "#9ca3af",
  },
  dropdownArrow: {
    fontSize: 12,
    color: "#6b7280",
  },
  dropdownList: {
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 8,
    backgroundColor: "#ffffff",
    marginTop: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  dropdownItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f3f4f6",
  },
  dropdownItemText: {
    fontSize: 16,
    color: "#374151",
  },
  registerButton: {
    backgroundColor: "#3b82f6",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#3b82f6",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  registerButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
});

export default Register;
