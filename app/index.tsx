import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
export default function Index() {
  const router = useRouter();

  const handlePress = () => {
    router.navigate("/register");
  };

  const handeltoprofilepage = () => {
    router.navigate("/profile");
  };

  const handlepipefilling=()=>{
    router.navigate('/pipefilling')
  }

 const  handledeviceconnectedcompo=()=>{
  router.navigate('/devicecontrol')
 }
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to Bhuvision</Text>
        <Text style={styles.subtitle}>Your journey starts here</Text>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={handlePress}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={handeltoprofilepage}
      >
        <Text style={styles.buttonText}>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={handlepipefilling}
      >
        <Text style={styles.buttonText}>PipeFilling</Text>
      </TouchableOpacity>

       <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={handledeviceconnectedcompo}
      >
        <Text style={styles.buttonText}>Device Tab(Connected)</Text>
      </TouchableOpacity>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#1e293b",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "#64748b",
    marginBottom: 40,
    textAlign: "center",
    lineHeight: 24,
  },
  button: {
    backgroundColor: "#3b82f6",
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 160,
    shadowColor: "#3b82f6",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
});
