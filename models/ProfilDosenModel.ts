import { DataTypes, Model, Optional } from "sequelize";
import db from "../utils/dbUtil";

interface ProfilDosenAttributes {
  id: string;
  user_id: string;
  nidn: string;
  prodi: string;
  jabatan_fungsional: string; // ✅ KOLOM BARU
  sinta_id?: string;
  scopus_id?: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface ProfilDosenInput
  extends Optional<ProfilDosenAttributes, "id"> {}
export interface ProfilDosenOutput extends Required<ProfilDosenAttributes> {}

class ProfilDosenModel
  extends Model<ProfilDosenAttributes, ProfilDosenInput>
  implements ProfilDosenAttributes
{
  public id!: string;
  public user_id!: string;
  public nidn!: string;
  public prodi!: string;
  public jabatan_fungsional!: string; // ✅ PROPERTI BARU
  public sinta_id!: string;
  public scopus_id!: string;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

ProfilDosenModel.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nidn: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    prodi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //DEFINISI KOLOM BARU
    jabatan_fungsional: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sinta_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    scopus_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize: db,
    tableName: "m_profil_dosen",
    underscored: true,
  }
);

export default ProfilDosenModel;
