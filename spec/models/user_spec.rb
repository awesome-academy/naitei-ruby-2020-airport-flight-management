require 'rails_helper'

RSpec.describe User, type: :model do
  let(:user) {FactoryBot.create :user}
  let!(:user_fail) {FactoryBot.build :user, name: nil}
  describe "validations" do
    context "when all required fields given" do
      it "should be true" do
        expect(user.valid?).to eq true
      end
    end

    context "when missing required fields" do
      it "should be false" do
        expect(user_fail.valid?).to eq false
      end
    end
  end

  describe "Enums" do
    context "when type_account has admin, air_traffic_officer, pilot" do
      it "should be true" do
        is_expected.to define_enum_for(:type_account).with_values(admin: 0, air_traffic_officer: 1, pilot: 2)
      end
    end
  end

  describe "Associations" do
    it "should has many schedules" do
      is_expected.to have_many(:schedules).dependent(:nullify)
    end
  end

  describe ".new_token" do
    it "new token should be successfully generated" do
      expect(User.new_token.size > 0).to eq(true)
    end
  end
end
