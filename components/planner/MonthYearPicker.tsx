import { AppText } from "@/components/ui/AppText";
import { useAppColors } from "@/hooks/use-app-colors";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Modal,
  Pressable,
  TouchableOpacity,
  View,
} from "react-native";

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

const MIN_YEAR = 2026;
const MIN_MONTH = 2; // March

interface MonthYearPickerProps {
  visible: boolean;
  year: number;
  month: number; // 0-indexed
  onConfirm: (year: number, month: number) => void;
  onClose: () => void;
}

export function MonthYearPicker({
  visible,
  year,
  month,
  onConfirm,
  onClose,
}: MonthYearPickerProps) {
  const { colors } = useAppColors();
  const [tempYear, setTempYear] = useState(year);
  const [tempMonth, setTempMonth] = useState(month);

  const isDisabled = (m: number) => tempYear === MIN_YEAR && m < MIN_MONTH;

  const handlePrevYear = () => {
    if (tempYear <= MIN_YEAR) return;
    const newYear = tempYear - 1;
    setTempYear(newYear);
    // clamp selected month if needed
    if (newYear === MIN_YEAR && tempMonth < MIN_MONTH) {
      setTempMonth(MIN_MONTH);
    }
  };

  const handleNextYear = () => setTempYear((y) => y + 1);

  const handleConfirm = () => {
    onConfirm(tempYear, tempMonth);
    onClose();
  };

  // Reset temp state when modal opens
  const handleOpen = () => {
    setTempYear(year);
    setTempMonth(month);
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onShow={handleOpen}
      onRequestClose={onClose}
    >
      {/* Backdrop */}
      <Pressable
        className="flex-1 items-center justify-center"
        style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
        onPress={onClose}
      >
        {/* Picker card — stop propagation */}
        <Pressable
          onPress={(e) => e.stopPropagation()}
          className="w-[320px] rounded-3xl p-6"
          style={{ backgroundColor: colors.cardBackground }}
        >
          {/* Year row */}
          <View className="flex-row items-center justify-between mb-6">
            <TouchableOpacity
              onPress={handlePrevYear}
              disabled={tempYear <= MIN_YEAR}
              activeOpacity={0.7}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Ionicons
                name="chevron-back"
                size={24}
                color={tempYear <= MIN_YEAR ? colors.secondaryText : colors.text}
              />
            </TouchableOpacity>

            <AppText
              className="text-xl"
              weight="bold"
              style={{ color: colors.text }}
            >
              {tempYear}
            </AppText>

            <TouchableOpacity
              onPress={handleNextYear}
              activeOpacity={0.7}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Ionicons name="chevron-forward" size={24} color={colors.text} />
            </TouchableOpacity>
          </View>

          {/* Month grid */}
          <View className="flex-row flex-wrap">
            {MONTHS.map((name, idx) => {
              const disabled = isDisabled(idx);
              const selected = tempMonth === idx && !disabled;
              return (
                <TouchableOpacity
                  key={name}
                  onPress={() => !disabled && setTempMonth(idx)}
                  activeOpacity={disabled ? 1 : 0.7}
                  className="items-center justify-center rounded-2xl py-3 mb-3"
                  style={{
                    width: "25%",
                    backgroundColor: selected ? colors.primary : "transparent",
                    opacity: disabled ? 0.3 : 1,
                  }}
                >
                  <AppText
                    weight="bold"
                    style={{
                      color: selected ? colors.white : colors.text,
                      fontSize: 14,
                    }}
                  >
                    {name}
                  </AppText>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* Actions */}
          <View className="flex-row gap-3 mt-2">
            <TouchableOpacity
              onPress={onClose}
              activeOpacity={0.7}
              className="flex-1 items-center py-3 rounded-2xl"
              style={{
                borderWidth: 1,
                borderColor: colors.borderColor,
              }}
            >
              <AppText weight="bold" style={{ color: colors.secondaryText }}>
                Cancel
              </AppText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleConfirm}
              activeOpacity={0.7}
              className="flex-1 items-center py-3 rounded-2xl"
              style={{ backgroundColor: colors.primary }}
            >
              <AppText weight="bold" style={{ color: colors.white }}>
                Done
              </AppText>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}
