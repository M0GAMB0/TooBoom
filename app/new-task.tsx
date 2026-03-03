import {
  DifficultyEnergySection,
  QuickActionsRow,
  SelectionGroup,
  SubtaskList,
  TaskFormHeader,
  TaskInputSection,
  ToggleItem,
} from "@/components/add-task";
import { useAppColors } from "@/hooks/use-app-colors";
import { addCategory } from "@/src/redux/categorySlice";
import { RootState } from "@/src/redux/store";
import React, { useState } from "react";
import {
  Keyboard,
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";

const COLORS = ["#6366f1", "#a855f7", "#3b82f6", "#10b981", "#f87171", "#fbbf24"];

export default function NewTaskScreen() {
  const { colors } = useAppColors();
  const dispatch = useDispatch();
  const categories = useSelector((state: RootState) => state.categories.categories);

  // Form State
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("High");
  const [category, setCategory] = useState("Work");

  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [selectedColor, setSelectedColor] = useState(COLORS[0]);

  const handleAddCategory = () => {
    if (newCategoryName.trim()) {
      dispatch(
        addCategory({
          label: newCategoryName,
          value: newCategoryName,
          color: selectedColor,
        })
      );
      setCategory(newCategoryName);
      setNewCategoryName("");
      setIsAddingCategory(false);
    }
  };
  const [subtasks, setSubtasks] = useState([
    { id: "1", text: "Draft initial outline", completed: false },
    { id: "2", text: "", completed: false },
  ]);
  const [remindMe, setRemindMe] = useState(true);
  const [makeHabit, setMakeHabit] = useState(false);

  // Subtask handlers
  const addSubtask = () => {
    setSubtasks([
      ...subtasks,
      { id: Date.now().toString(), text: "", completed: false },
    ]);
  };

  const updateSubtask = (id: string, text: string) => {
    setSubtasks(subtasks.map((s) => (s.id === id ? { ...s, text } : s)));
  };

  const toggleSubtask = (id: string) => {
    setSubtasks(
      subtasks.map((s) =>
        s.id === id ? { ...s, completed: !s.completed } : s
      )
    );
  };

  return (
    <SafeAreaView
      className="flex-1"
      style={{ backgroundColor: colors.background }}
    >
      <TaskFormHeader />

      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40, paddingTop: 20 }}
      >
        <TaskInputSection
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
        />

        <QuickActionsRow colors={colors} />

        <SelectionGroup
          label="Priority"
          selectedValue={priority}
          onSelect={setPriority}
          options={[
            { label: "High", value: "High", icon: "!" },
            { label: "Medium", value: "Medium" },
            { label: "Low", value: "Low" },
          ]}
        />

        <SelectionGroup
          label="Category"
          selectedValue={category}
          onSelect={setCategory}
          options={categories}
          onAddPress={() => setIsAddingCategory(true)}
        />

        <DifficultyEnergySection colors={colors} />

        <SubtaskList
          subtasks={subtasks}
          onAddSubtask={addSubtask}
          onUpdateSubtask={updateSubtask}
          onToggleSubtask={toggleSubtask}
        />

        <ToggleItem
          label="Remind me"
          description="Alert at due time"
          icon="notifications"
          value={remindMe}
          onValueChange={setRemindMe}
        />

        <ToggleItem
          label="Make Habit"
          description="Repeat daily"
          icon="repeat-outline"
          value={makeHabit}
          onValueChange={setMakeHabit}
        />

        <View className="h-12" />
      </ScrollView>

      {/* Add Category Bottom Sheet */}
      <Modal
        visible={isAddingCategory}
        transparent
        animationType="slide"
        onRequestClose={() => setIsAddingCategory(false)}
      >
        <TouchableWithoutFeedback onPress={() => setIsAddingCategory(false)}>
            <View
              className="flex-1 justify-end"
              style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View
                className="w-full rounded-t-[40px] p-8 pb-10"
                style={{ backgroundColor: colors.cardBackground }}
              >
                {/* Handle Bar */}
                <View className="items-center mb-6">
                  <View
                    className="w-12 h-1.5 rounded-full"
                    style={{ backgroundColor: colors.borderColor }}
                  />
                </View>

                <Text
                  className="text-2xl font-bold text-center mb-1"
                  style={{ color: colors.text }}
                >
                  Add New Category
                </Text>
                <Text
                  className="text-sm text-center mb-8"
                  style={{ color: colors.secondaryText }}
                >
                  Organize your tasks efficiently
                </Text>

                <View className="mb-6">
                  <Text
                    className="text-sm font-semibold mb-3"
                    style={{ color: colors.text }}
                  >
                    Category Name
                  </Text>
                  <TextInput
                    autoFocus
                    className="h-14 rounded-2xl px-5 text-base"
                    style={{
                      backgroundColor: colors.background,
                      color: colors.text,
                      borderWidth: 1,
                      borderColor: colors.borderColor,
                    }}
                    placeholder="e.g. Personal Projects"
                    placeholderTextColor={colors.secondaryText}
                    value={newCategoryName}
                    onChangeText={setNewCategoryName}
                  />
                </View>

                <View className="mb-10">
                  <Text
                    className="text-sm font-semibold mb-4"
                    style={{ color: colors.text }}
                  >
                    Select Color
                  </Text>
                  <View className="flex-row justify-between">
                    {COLORS.map((color) => (
                      <TouchableOpacity
                        key={color}
                        onPress={() => setSelectedColor(color)}
                        className="w-12 h-12 rounded-full items-center justify-center"
                        style={{
                          backgroundColor: color,
                          borderWidth: selectedColor === color ? 3 : 0,
                          borderColor: colors.primary,
                        }}
                      >
                        {selectedColor === color && (
                          <View
                            className="w-14 h-14 rounded-full border-2 absolute"
                            style={{ borderColor: colors.primary }}
                          />
                        )}
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>

                <TouchableOpacity
                  onPress={handleAddCategory}
                  className="h-16 rounded-2xl items-center justify-center mb-4"
                  style={{
                    backgroundColor: colors.primary,
                    shadowColor: colors.primary,
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.3,
                    shadowRadius: 8,
                    elevation: 5,
                  }}
                >
                  <Text className="text-lg font-bold" style={{ color: colors.white }}>Create Category</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => setIsAddingCategory(false)}
                  className="h-16 rounded-2xl items-center justify-center"
                  style={{ backgroundColor: colors.background }}
                >
                  <Text
                    className="text-lg font-semibold"
                    style={{ color: colors.secondaryText }}
                  >
                    Cancel
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </SafeAreaView>
  );
}
