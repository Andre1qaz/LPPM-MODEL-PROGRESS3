import { DataTypes, Model, Optional } from "sequelize";
import db from "../utils/dbUtil";

interface SeminarReviewAttributes {
  id: string; // <--- UBAH KE STRING (UUID)
  seminar_id: string; // <--- UBAH KE STRING (UUID)
  reviewer_id: string; // <--- UBAH KE STRING (UUID)
  catatan_review?: string;
  keputusan?: 'minor' | 'major' | 'accept';
  status: 'menunggu' | 'selesai';
  created_at?: Date;
  updated_at?: Date;
}

export interface SeminarReviewInput extends Optional<SeminarReviewAttributes, "id"> {}
export interface SeminarReviewOutput extends Required<SeminarReviewAttributes> {}

class SeminarReviewModel extends Model<SeminarReviewAttributes, SeminarReviewInput> implements SeminarReviewAttributes {
  public id!: string; // <--- UBAH KE STRING
  public seminar_id!: string; // <--- UBAH KE STRING
  public reviewer_id!: string;
  public catatan_review!: string;
  public keputusan!: 'minor' | 'major' | 'accept';
  public status!: 'menunggu' | 'selesai';
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

SeminarReviewModel.init(
  {
    id: {
      type: DataTypes.STRING, // <--- UBAH DARI BIGINT KE STRING
      primaryKey: true,
      // autoIncrement: true, // <--- HAPUS INI
    },
    seminar_id: {
      type: DataTypes.STRING, // <--- UBAH DARI BIGINT KE STRING
      allowNull: false,
    },
    reviewer_id: {
      type: DataTypes.STRING, // <--- UBAH DARI BIGINT KE STRING
      allowNull: false,
    },
    catatan_review: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    keputusan: {
      type: DataTypes.ENUM('minor', 'major', 'accept'),
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM('menunggu', 'selesai'),
      defaultValue: 'menunggu',
    },
  },
  {
    sequelize: db,
    tableName: "t_seminar_review",
    underscored: true,
  }
);

export default SeminarReviewModel;