// import React, { useState, useRef, useEffect } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
//   StatusBar,
//   SafeAreaView,
//   Image,
//   Modal,
//   Animated,
//   Dimensions,
//   Easing,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import { LinearGradient } from "expo-linear-gradient";
// import hc05deviceimg from "../assets/images/hc05blue.png";

// const { width, height } = Dimensions.get('window');

// const devicecontol = () => {
//   const [deviceConnected, setDeviceConnected] = useState(true);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [modalType, setModalType] = useState('');

//   // Animation values
//   const fadeAnim = useRef(new Animated.Value(0)).current;
//   const scaleAnim = useRef(new Animated.Value(0.8)).current;
//   const slideAnim = useRef(new Animated.Value(50)).current;

//   // Modal animation functions
//   const showModal = (type) => {
//     setModalType(type);
//     setModalVisible(true);

//     // Reset animation values
//     fadeAnim.setValue(0);
//     scaleAnim.setValue(0.8);
//     slideAnim.setValue(50);

//     // Animate in
//     Animated.parallel([
//       Animated.timing(fadeAnim, {
//         toValue: 1,
//         duration: 300,
//         useNativeDriver: true,
//       }),
//       Animated.spring(scaleAnim, {
//         toValue: 1,
//         tension: 100,
//         friction: 8,
//         useNativeDriver: true,
//       }),
//       Animated.timing(slideAnim, {
//         toValue: 0,
//         duration: 300,
//         easing: Easing.out(Easing.quad),
//         useNativeDriver: true,
//       }),
//     ]).start();
//   };

//   const hideModal = () => {
//     Animated.parallel([
//       Animated.timing(fadeAnim, {
//         toValue: 0,
//         duration: 200,
//         useNativeDriver: true,
//       }),
//       Animated.timing(scaleAnim, {
//         toValue: 0.8,
//         duration: 200,
//         useNativeDriver: true,
//       }),
//       Animated.timing(slideAnim, {
//         toValue: 50,
//         duration: 200,
//         useNativeDriver: true,
//       }),
//     ]).start(() => {
//       setModalVisible(false);
//       setModalType('');
//     });
//   };

//   const handleDispense = () => {
//     console.log(`Dispensing ${modalType}...`)
//     hideModal();
//   };

//   const getModalContent = () => {
//     switch (modalType) {
//       case 'ES-A':
//         return {
//           title: 'Extraction Solution - A',
//           instruction: 'Take 5g soil in the bottle and bring it under Extraction Solution - A dispense pipe. Shake the solution for 15mins and then filter.'
//         };
//       case 'ES-B':
//         return {
//           title: 'Extraction Solution - B',
//           instruction: 'Take 5g soil in the bottle and bring it under Extraction Solution - B dispense pipe. Shake the solution for 10mins and then filter.'
//         };
//       case 'DW-Ex-Ph':
//         return {
//           title: 'Distilled Water (DW-Ex-Ph)',
//           instruction: 'Take 0.5g soil in the bottle and bring it under Organic carbon A & B dispense pipe. Shake the solution for 10mins and then filter. '
//         };
//       case 'OC':
//         return {
//           title: 'Organic Carbon (OC: A & B)',
//           instruction: 'Take 20g soil in the beaker and bring it under Distilled Water dispense pipe. Shake the soil mixture for 15 mins at intervals of 2 mins.'
//         };
//       default:
//         return {
//           title: '',
//           instruction: ''
//         };
//     }
//   };

//   // Enhanced Modal Component
//   const ExtractionModal = () => {
//     const content = getModalContent();

//     return (
//       <Modal
//         animationType="none"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={hideModal}
//       >
//         <Animated.View
//           style={[
//             styles.modalOverlay,
//             { opacity: fadeAnim }
//           ]}
//         >
//           <TouchableOpacity
//             style={styles.modalBackdrop}
//             activeOpacity={1}
//             onPress={hideModal}
//           />

//           <Animated.View
//             style={[
//               styles.modalContent,
//               {
//                 transform: [
//                   { scale: scaleAnim },
//                   { translateY: slideAnim }
//                 ]
//               }
//             ]}
//           >
//             {/* Header */}
//             <View style={styles.modalHeader}>
//               <Text style={styles.modalTitle}>{content.title}</Text>
//               <TouchableOpacity onPress={hideModal} style={styles.closeButton}>
//                 <Ionicons name="close" size={24} color="#9CA3AF" />
//               </TouchableOpacity>
//             </View>

//             {/* Content */}
//             <View style={styles.modalBodyContent}>
//               {/* Note Section */}
//               <View style={styles.noteSection}>
//                 <View style={styles.noteHeader}>
//                   <View style={styles.noteIcon}>
//                     <Ionicons name="document-text" size={16} color="#007AFF" />
//                   </View>
//                   <Text style={styles.noteLabel}>Note</Text>
//                 </View>

//                 <Text style={styles.noteText}>
//                   {content.instruction}
//                 </Text>
//               </View>

//               {/* Dispense Button */}
//               <TouchableOpacity
//                 style={styles.dispenseButton}
//                 onPress={handleDispense}
//                 activeOpacity={0.8}
//               >
//                 <Text style={styles.dispenseButtonText}>Dispense</Text>
//               </TouchableOpacity>
//             </View>
//           </Animated.View>
//         </Animated.View>
//       </Modal>
//     );
//   };

//   const ActionButton = ({ icon, imageSource, title, onPress }) => (
//     <TouchableOpacity style={styles.actionButton} onPress={onPress}>
//       <View style={styles.actionButtonIcon}>
//         {imageSource ? (
//           <Image source={imageSource} style={styles.actionButtonImage} />
//         ) : (
//           <Ionicons name={icon} size={24} color="#007AFF" />
//         )}
//       </View>
//       <Text style={styles.actionButtonText}>{title}</Text>
//     </TouchableOpacity>
//   );

//   const MenuOption = ({ title, onPress }) => (
//     <TouchableOpacity style={styles.menuOption} onPress={onPress}>
//       <Text style={styles.menuOptionText}>{title}</Text>
//       <Ionicons name="chevron-forward" size={20} color="#C7C7CC" />
//     </TouchableOpacity>
//   );

//   const ParameterItem = ({ letter, title, available, color }) => (
//     <View style={styles.parameterItem}>
//       <View style={[styles.parameterIcon, { backgroundColor: color }]}>
//         <Text style={styles.parameterLetter}>{letter}</Text>
//       </View>
//       <View style={styles.parameterInfo}>
//         <Text style={styles.parameterTitle}>{title}</Text>
//         <Text style={styles.parameterAvailable}>Available - {available}</Text>
//       </View>
//     </View>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="dark-content" backgroundColor="#F2F2F7" />

//       {/* ====== HEADER WRAPPER ====== */}
//       <View style={styles.headerWrapper}>
//         <LinearGradient
//           colors={["#EAF4FF", "#FFFFFF"]}
//           style={styles.customHeader}
//         >
//           <View style={styles.headerContent}>
//             <View style={styles.headerLeft}>
//               <View style={styles.rowContainer}>
//                 <View style={styles.bluetoothIconWrapper}>
//                   <Ionicons name="bluetooth" size={24} color="#007AFF" />
//                 </View>
//                 <View style={styles.deviceInfo}>
//                   <Text style={styles.deviceConnectedText}>
//                     Device Connected.
//                   </Text>
//                   <Text style={styles.deviceMacText}>
//                     Mac id- 00:20:12:08:2A:D2
//                   </Text>
//                 </View>
//               </View>
//               <TouchableOpacity
//                 style={styles.buttonBase}
//                 onPress={() => setDeviceConnected((prev) => !prev)}
//               >
//                 <Text
//                   style={
//                     deviceConnected ? styles.disconnectText : styles.connectText
//                   }
//                 >
//                   {deviceConnected ? "Disconnect Device" : "Connect Device"}
//                 </Text>
//               </TouchableOpacity>
//             </View>

//             <View style={styles.headerRight}>
//               <Image source={hc05deviceimg} style={styles.deviceImageRight} />
//             </View>
//           </View>
//         </LinearGradient>
//       </View>

//       <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
//         {/* Action Buttons */}
//         <View style={styles.actionButtons}>
//           <ActionButton
//             imageSource={require("../assets/images/run_test.png")}
//             title="Run Test"
//             onPress={() => {}}
//           />
//           <ActionButton
//             imageSource={require("../assets/images/sensors.png")}
//             title="Check Sensors"
//             onPress={() => {}}
//           />
//           <ActionButton
//             imageSource={require("../assets/images/device_diagnostic.png")}
//             title="Device Diagnostics"
//             onPress={() => {}}
//           />
//           <ActionButton
//             imageSource={require("../assets/images/dev_calib.png")}
//             title="Device Calibration"
//             onPress={() => {}}
//           />
//         </View>

//         {/* Pipe Options */}
//         <View style={styles.section}>
//           <MenuOption title="Pipe Filling" onPress={() => {}} />
//           <MenuOption title="Pipe empty" onPress={() => {}} />
//         </View>

//         {/* External Dispense */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>External Dispense</Text>
//           <MenuOption
//             title="Extraction Solution A (ES-A)"
//             onPress={() => showModal('ES-A')}
//           />
//           <MenuOption
//             title="Extraction Solution B (ES-B)"
//             onPress={() => showModal('ES-B')}
//           />
//           <MenuOption
//             title="Distilled Water (DW-Ex-Ph)"
//             onPress={() => showModal('DW-Ex-Ph')}
//           />
//           <MenuOption
//             title="Organic Carbon (OC: A & B)"
//             onPress={() => showModal('OC')}
//           />
//         </View>

//         {/* Parameter Count */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Parameter Count</Text>
//           <ParameterItem
//             letter="N"
//             title="Nitrogen"
//             available="30"
//             color="#34C759"
//           />
//           <ParameterItem
//             letter="P"
//             title="Phosphorus"
//             available="55"
//             color="#FF9500"
//           />
//           <ParameterItem
//             letter="K"
//             title="Potassium"
//             available="20"
//             color="#5856D6"
//           />
//           <ParameterItem
//             letter="S"
//             title="Sulphur"
//             available="90"
//             color="#32D74B"
//           />
//         </View>
//       </ScrollView>

//       {/* Modal Component */}
//       <ExtractionModal />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F2F2F7",
//   },

//   headerWrapper: {
//     marginBottom: 7,
//   },

//   customHeader: {
//     paddingHorizontal: 16,
//     paddingTop: 60,
//     backgroundColor: "#EAF4FF",
//     borderBottomWidth: 1,
//     borderBottomColor: "#E5E5EA",
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//   },

//   headerContent: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },

//   headerLeft: {
//     flex: 1,
//   },

//   headerRight: {
//     marginRight: 10,
//     bottom: 20,
//   },

//   rowContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 12,
//   },

//   bluetoothIconWrapper: {
//     backgroundColor: "#fff",
//     padding: 8,
//     borderRadius: 10,
//     width: 45,
//     height: 45,
//     alignItems: "center",
//     justifyContent: "center",
//     marginRight: 12,
//   },

//   deviceInfo: {
//     flex: 1,
//   },

//   deviceConnectedText: {
//     fontSize: 18,
//     fontWeight: "700",
//     color: "#000",
//   },

//   deviceMacText: {
//     fontSize: 14,
//     color: "#444",
//     marginTop: 2,
//   },

//   buttonBase: {
//     backgroundColor: "#fff",
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     borderRadius: 10,
//     alignSelf: "flex-start",
//   },

//   connectText: {
//     color: "green",
//     fontWeight: "bold",
//   },

//   disconnectText: {
//     color: "red",
//     fontWeight: "bold",
//   },

//   deviceImageRight: {
//     width: 110,
//     height: 160,
//     top: 10,
//     resizeMode: "contain",
//     objectFit: "cover",
//   },

//   content: {
//     flex: 1,
//   },

//   actionButtons: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     alignItems: "flex-start",
//     paddingHorizontal: 16,
//     paddingVertical: 16,
//     backgroundColor: "#FFFFFF",
//     marginBottom: 8,
//   },

//   actionButton: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "flex-start",
//     paddingVertical: 12,
//     paddingHorizontal: 8,
//     minHeight: 80,
//   },

//   actionButtonIcon: {
//     width: 32,
//     height: 32,
//     alignItems: "center",
//     justifyContent: "center",
//     marginBottom: 8,
//   },

//   actionButtonImage: {
//     width: 28,
//     height: 28,
//     resizeMode: "contain",
//   },

//   actionButtonText: {
//     fontSize: 14,
//     color: "black",
//     textAlign: "center",
//     lineHeight: 18,
//     paddingHorizontal: 4,
//   },

//   section: {
//     backgroundColor: "#FFFFFF",
//     marginBottom: 8,
//   },

//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: "600",
//     color: "#000000",
//     paddingHorizontal: 16,
//     paddingTop: 16,
//     paddingBottom: 8,
//   },

//   menuOption: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: "#E5E5EA",
//   },

//   menuOptionText: {
//     fontSize: 16,
//     color: "#000000",
//   },

//   parameterItem: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: "#E5E5EA",
//   },

//   parameterIcon: {
//     width: 32,
//     height: 32,
//     borderRadius: 16,
//     alignItems: "center",
//     justifyContent: "center",
//     marginRight: 12,
//   },

//   parameterLetter: {
//     fontSize: 16,
//     fontWeight: "600",
//     color: "#FFFFFF",
//   },

//   parameterInfo: {
//     flex: 1,
//   },

//   parameterTitle: {
//     fontSize: 16,
//     fontWeight: "500",
//     color: "#000000",
//   },

//   parameterAvailable: {
//     fontSize: 14,
//     color: "#8E8E93",
//     marginTop: 2,
//   },

//   // Modal Styles
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   modalBackdrop: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//   },

//   modalContent: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 16,
//     width: width - 32,
//     maxWidth: 400,
//     maxHeight: height * 0.8,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 10,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 20,
//     elevation: 10,
//     marginHorizontal: 16,
//   },

//   modalHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 24,
//     paddingVertical: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: '#E5E7EB',
//   },

//   modalTitle: {
//     fontSize: 20,
//     fontWeight: '600',
//     color: '#111827',
//     flex: 1,
//   },

//   closeButton: {
//     padding: 4,
//   },

//   modalBodyContent: {
//     padding: 24,
//   },

//   noteSection: {
//     marginBottom: 24,
//   },

//   noteHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 12,
//   },

//   noteIcon: {
//     width: 32,
//     height: 32,
//     backgroundColor: '#E6F3FF',
//     borderRadius: 8,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 8,
//   },

//   noteLabel: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#007AFF',
//   },

//   noteText: {
//     fontSize: 16,
//     lineHeight: 24,
//     color: '#374151',
//   },

//   dispenseButton: {
//     backgroundColor: '#007AFF',
//     paddingVertical: 16,
//     borderRadius: 12,
//     alignItems: 'center',
//     shadowColor: '#007AFF',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },

//   dispenseButtonText: {
//     color: '#FFFFFF',
//     fontSize: 18,
//     fontWeight: '600',
//   },
// });

// export default devicecontol;

//THE ABOVE CODE HAS A BETTER ANIMATION COMPARATIVELY BUT RIGHT NOW WILL STICK TO THE FIGMA DESIGN

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  SafeAreaView,
  Image,
  Modal,
  Dimensions,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import hc05deviceimg from "../assets/images/hc05blue.png";
import { Grayscale } from "react-native-color-matrix-image-filters";

const { height } = Dimensions.get("window");

const devicecontrol = () => {
  const [deviceConnected, setDeviceConnected] = useState<boolean>(true);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>("");

  const showModal = (type: string) => {
    setModalType(type);
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
    setModalType("");
  };

  const handleDispense = () => {
    console.log(`Dispensing ${modalType}...`);
    hideModal();
  };

  const getModalContent = () => {
    switch (modalType) {
      case "ES-A":
        return {
          title: "Extraction Solution - A",
          instruction:
            "Take 5g soil in the bottle and bring it under Extraction Solution - A dispense pipe. Shake the solution for 15mins and then filter.",
        };
      case "ES-B":
        return {
          title: "Extraction Solution - B",
          instruction:
            "Take 5g soil in the bottle and bring it under Extraction Solution - B dispense pipe. Shake the solution for 15mins and then filter.",
        };
      case "DW-Ex-Ph":
        return {
          title: "Distilled Water (DW-Ex-Ph)",
          instruction:
            "Take 20g soil in the beaker and bring it under Distilled Water dispense pipe. Shake the soil mixture for 15 mins at intervals of 2 mins.",
        };
      case "OC":
        return {
          title: "Organic Carbon (OC: A & B)",
          instruction:
            "Take 0.5g soil in the bottle and bring it under Organic carbon A & B dispense pipe. Shake the solution for 10mins and then filter.",
        };
      default:
        return { title: "", instruction: "" };
    }
  };
  const ExtractionModal = () => {
    const content = getModalContent();

    return (
      <Modal
        // animationType="slide" if u want sliding animation uncomment it
        transparent={true}
        statusBarTranslucent={true}
        visible={modalVisible}
        onRequestClose={hideModal}
      >
        <View style={styles.modalOverlay}>
          <TouchableOpacity
            style={styles.modalBackdrop}
            activeOpacity={1}
            onPress={hideModal}
          />
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>{content.title}</Text>
              <TouchableOpacity onPress={hideModal} style={styles.closeButton}>
                <Ionicons name="close" size={24} color="#6B7280" />
              </TouchableOpacity>
            </View>

            <View style={styles.noteSection}>
              <View style={styles.noteHeader}>
                <View style={styles.noteIcon}>
                  <Ionicons name="document-text" size={16} color="#2563EB" />
                </View>
                <Text style={styles.noteLabel}>Note</Text>
              </View>
              <Text style={styles.noteText}>{content.instruction}</Text>
            </View>

            <TouchableOpacity
              style={styles.dispenseButton}
              onPress={handleDispense}
              activeOpacity={0.8}
            >
              <Text style={styles.dispenseButtonText}>Dispense</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };

  const ActionButton = ({ icon, imageSource, title, onPress }) => (
    <TouchableOpacity style={styles.actionButton} onPress={onPress}>
      <View style={styles.actionButtonIcon}>
        {imageSource ? (
          <Image source={imageSource} style={styles.actionButtonImage} />
        ) : (
          <Ionicons name={icon} size={24} color="#007AFF" />
        )}
      </View>
      <Text style={styles.actionButtonText}>{title}</Text>
    </TouchableOpacity>
  );

  const MenuOption = ({ title, onPress }) => (
    <TouchableOpacity style={styles.menuOption} onPress={onPress}>
      <Text style={styles.menuOptionText}>{title}</Text>
      <Ionicons name="chevron-forward" size={20} color="#C7C7CC" />
    </TouchableOpacity>
  );

  const ParameterItem = ({ letter, title, available, color }) => (
    <View style={styles.parameterItem}>
      <View style={[styles.parameterIcon, { backgroundColor: color }]}>
        <Text style={styles.parameterLetter}>{letter}</Text>
      </View>
      <View style={styles.parameterInfo}>
        <Text style={styles.parameterTitle}>{title}</Text>
        <Text style={styles.parameterAvailable}>Available - {available}</Text>
      </View>
    </View>
  );

  const NotConnected = ({ onConnect, imageSource }) => (
    <View style={styles.notConnectedWrapper}>
      <ImageBackground
        source={imageSource}
        style={styles.notConnectedBg}
        imageStyle={styles.notConnectedImageStyle}
      >
        <View style={styles.notConnectedOverlay} />
        <View style={styles.notConnectedContent}>
          <Text style={styles.notConnectedTitle}>Device Not Connected.</Text>
          <Text style={styles.notConnectedMessage}>
            The device is not connected.{"\n"}
            Please connect it to start operating.
          </Text>
          <TouchableOpacity
            style={styles.connectButton}
            onPress={onConnect}
            activeOpacity={0.8}
          >
            <Text style={styles.connectButtonText}>Connect</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F2F2F7" />
      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        scrollEnabled={!modalVisible}
      >
        {deviceConnected ? (
          <View>
            <View style={styles.headerWrapper}>
              <LinearGradient
                colors={["#EAF4FF", "#FFFFFF"]}
                style={styles.customHeader}
              >
                <View style={styles.headerContent}>
                  <View style={styles.headerLeft}>
                    <View style={styles.rowContainer}>
                      <View style={styles.bluetoothIconWrapper}>
                        <Ionicons name="bluetooth" size={24} color="#007AFF" />
                      </View>
                      <View style={styles.deviceInfo}>
                        <Text style={styles.deviceConnectedText}>
                          Device Connected.
                        </Text>
                        <Text style={styles.deviceMacText}>
                          Mac id- 00:20:12:08:2A:D2
                        </Text>
                      </View>
                    </View>
                    <TouchableOpacity
                      style={styles.buttonBase}
                      onPress={() => setDeviceConnected((prev) => !prev)}
                    >
                      <Text
                        style={
                          deviceConnected
                            ? styles.disconnectText
                            : styles.connectText
                        }
                      >
                        {deviceConnected
                          ? "Disconnect Device"
                          : "Connect Device"}
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.headerRight}>
                    <Image
                      source={hc05deviceimg}
                      style={styles.deviceImageRight}
                    />
                  </View>
                </View>
              </LinearGradient>
            </View>

            <View style={styles.actionButtons}>
              <ActionButton
                imageSource={require("../assets/images/run_test.png")}
                title="Run Test"
                onPress={() => {}}
              />
              <ActionButton
                imageSource={require("../assets/images/sensors.png")}
                title="Check Sensors"
                onPress={() => {}}
              />
              <ActionButton
                imageSource={require("../assets/images/device_diagnostic.png")}
                title="Device Diagnostics"
                onPress={() => {}}
              />
              <ActionButton
                imageSource={require("../assets/images/dev_calib.png")}
                title="Device Calibration"
                onPress={() => {}}
              />
            </View>

            <View style={styles.section}>
              <MenuOption title="Pipe Filling" onPress={() => {}} />
              <MenuOption title="Pipe empty" onPress={() => {}} />
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>External Dispense</Text>
              <MenuOption
                title="Extraction Solution A (ES-A)"
                onPress={() => showModal("ES-A")}
              />
              <MenuOption
                title="Extraction Solution B (ES-B)"
                onPress={() => showModal("ES-B")}
              />
              <MenuOption
                title="Distilled Water (DW-Ex-Ph)"
                onPress={() => showModal("DW-Ex-Ph")}
              />
              <MenuOption
                title="Organic Carbon (OC: A & B)"
                onPress={() => showModal("OC")}
              />
            </View>
          </View>
        ) : (
          <NotConnected
            onConnect={() => setDeviceConnected(true)}
            imageSource={hc05deviceimg}
          />
        )}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Parameter Count</Text>
          <ParameterItem
            letter="N"
            title="Nitrogen"
            available="30"
            color="#34C759"
          />
          <ParameterItem
            letter="P"
            title="Phosphorus"
            available="55"
            color="#FF9500"
          />
          <ParameterItem
            letter="K"
            title="Potassium"
            available="20"
            color="#5856D6"
          />
          <ParameterItem
            letter="S"
            title="Sulphur"
            available="90"
            color="#32D74B"
          />
        </View>
      </ScrollView>

      <ExtractionModal />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F2F2F7" },
  headerWrapper: { marginBottom: 7 },
  customHeader: {
    paddingHorizontal: 16,
    paddingTop: 60,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5EA",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerLeft: { flex: 1 },
  headerRight: { marginRight: 10, bottom: 20 },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  bluetoothIconWrapper: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 10,
    width: 45,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  deviceInfo: { flex: 1 },
  deviceConnectedText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
  },
  deviceMacText: { fontSize: 14, color: "#444", marginTop: 2 },
  buttonBase: {
    backgroundColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    alignSelf: "flex-start",
  },
  connectText: { color: "green", fontWeight: "bold" },
  disconnectText: { color: "red", fontWeight: "bold" },
  deviceImageRight: {
    width: 110,
    height: 160,
    top: 10,
    resizeMode: "contain",
  },
  content: { flex: 1 },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 16,
    backgroundColor: "#fff",
    marginBottom: 8,
  },
  actionButton: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 8,
    minHeight: 80,
  },
  actionButtonIcon: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  actionButtonImage: { width: 28, height: 28, resizeMode: "contain" },
  actionButtonText: {
    fontSize: 14,
    color: "black",
    textAlign: "center",
    lineHeight: 18,
  },
  section: { backgroundColor: "#fff", marginBottom: 8 },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  menuOption: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5EA",
  },
  menuOptionText: { fontSize: 16, color: "#000" },
  parameterItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5EA",
  },
  parameterIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  parameterLetter: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
  parameterInfo: { flex: 1 },
  parameterTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000",
  },
  parameterAvailable: {
    fontSize: 14,
    color: "#8E8E93",
    marginTop: 2,

    //not connected
  },
  notConnectedWrapper: {
    width: "100%",
    height: 400,
    backgroundColor: "#fff",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: "hidden",
  },
  notConnectedBg: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
 notConnectedImageStyle: {
  resizeMode: "cover",
  width: 412,
  height: 720,
  marginLeft: -80,
  marginTop: -20,       
},
  notConnectedOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  notConnectedContent: {
    position: "absolute",
    bottom: 20,
    left: 19,
    right: 17,
  },
  notConnectedTitle: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "700",
    top:38,
    width:200
  },
  notConnectedMessage: {
    color: "#fff",
    fontSize: 15,
    lineHeight: 20,
    marginBottom: 12,
    top:50
  },
  connectButton: {
    alignSelf: "flex-end",
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 10,
  },
  connectButtonText: {
    color: "#007AFF",
    fontSize: 16,
    fontWeight: "600",
  },
  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "flex-end",
  },
  modalBackdrop: {
    ...StyleSheet.absoluteFillObject,
  },
  modalContent: {
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    height: 360,
    paddingTop: 70,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginBottom: 12,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#111827",
    bottom: 50,
  },
  closeButton: {
    position: "absolute",
    right: 0,
    padding: 8,
    bottom: 42,
  },

  noteSection: {
    backgroundColor: "#EFF6FF",
    borderRadius: 8,
    padding: 16,
    marginBottom: 24,
    bottom: 30,
  },
  noteHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  noteIcon: {
    width: 28,
    height: 28,
    backgroundColor: "#DBEAFE",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  noteLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2563EB",
  },
  noteText: {
    fontSize: 15,
    lineHeight: 22,
    color: "#374151",
  },

  dispenseButton: {
    backgroundColor: "#2563EB",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  dispenseButtonText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "600",
  },
});

export default devicecontrol;
